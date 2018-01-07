<template>
    <!-- progress button -->
    <div :class='{"progress-button": true, "submit": true, "loading": onFire, "success": status === "success", "error": status === "error"}'>
        <!-- button with text -->
        <button ref="button" @click="fire" :disabled="onFire === true"><span><slot>Lưu</slot></span></button>

        <!-- svg circle for progress indication -->
        <svg ref="progress" class="progress-circle" width="70" height="70">
            <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
        </svg>

        <!-- checkmark to show on success -->
        <svg ref="success" class="checkmark" width="70" height="70">
            <path d="m31.5,46.5l15.3,-23.2"/>
            <path d="m31.5,46.5l-8.5,-7.1"/>
        </svg>

        <!-- cross to show on error -->
        <svg ref="error" class="cross" width="70" height="70">
            <path d="m35,35l-9.3,-9.3"/>
            <path d="m35,35l9.3,9.3"/>
            <path d="m35,35l-9.3,9.3"/>
            <path d="m35,35l9.3,-9.3"/>
        </svg>

    </div><!-- /progress-button -->
</template>

<script>
function SVGEL(element) {
    this.el = element;
    this.paths = [].slice.call( this.el.querySelectorAll( 'path' ) );
	this.pathsArr = new Array();
	this.lengthsArr = new Array();
	this._init();
}
SVGEL.prototype._init = function() {
	var self = this;
	this.paths.forEach( function( path, i ) {
		self.pathsArr[i] = path;
		path.style.strokeDasharray = self.lengthsArr[i] = path.getTotalLength();
	} );
	// undraw stroke
	this.draw(0);
}
SVGEL.prototype.draw = function( val ) {
	for( var i = 0, len = this.pathsArr.length; i < len; ++i ){
		this.pathsArr[ i ].style.strokeDashoffset = this.lengthsArr[ i ] * ( 1 - val );
	}
}

export default {
    props: {
        onSuccess: {
            type: Function,
            default: () => {}
        },
        onError: {
            type: Function,
            default: () => {}
        },
        data: {
            type: Object,
            default: () => {},
        }
    },
    data() {
        return {
            onFire: false,
            successSVG: false,
            errorSVG: false,
            progressSVG: false,
            progress: 0,
            status: false,
            options: {
                statusTime: 1500,
                timeOut: 5000,
            }
        }
    },
    methods: {
        fire() {
            this.onFire = true;
            if (this.data) {
                const prg = setInterval(() => {
                    this.progress = Math.min(this.progress + Math.random() * 0.1, 1);
                    this.setProgress();
                }, 150);
                setTimeout( () => {
                    clearInterval(prg);
                    this.stop("error");

                }, this.options.timeOut + 500);
                this.axios(this.data).then( result => {
                    clearInterval(prg);
                    this.stop("success", () => {
                        this.onSuccess(result);
                    });
                }).catch( error => {
                    clearInterval(prg);
                    this.stop("error", () => {
                        this.onError(error);
                    });                    
                });
            }
        },
        stop(status, callback = () => {}) {

            setTimeout(() => {
                this.progressSVG.draw(0);
                if (status === "success") {
                    this.status = "success";
                    this.successSVG.draw(1);

                } else {
                    this.status = "error";
                    this.errorSVG.draw(1);                    
                }
                setTimeout( () => {
                    this.status = false;
                    this.successSVG.draw(0);
                    this.errorSVG.draw(0);        
                    this.onFire = false;
                }, this.options.statusTime);
            }, 300);

        },
        setProgress( ) {
            this.progressSVG.draw(this.progress);
        }
    },
    mounted() {
        this.status = false,
        this.successSVG = new SVGEL(this.$refs.success);
        this.errorSVG = new SVGEL(this.$refs.error);
        this.progressSVG = new SVGEL(this.$refs.progress);

    }
}
</script>

<style>

</style>
