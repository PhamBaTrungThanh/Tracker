<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];


    /**
     * Role means:
     * 0: Admin
     * 1: Director
     * 2: Project Department
     * 3: Accounting
     * 4: Engineering Department
     * 5: Engineer
     */
    protected $roles = [
        0 => "Admin",
        1 => "Ban giám đốc",
        2 => "Phòng dự án",
        3 => "Phòng kế toán",
        4 => "Phòng kỹ thuật",
        5 => "Kỹ sư công trường",
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function label()
    {
        return $this->roles[$this->role];
    }
    public function can_add_invoice()
    {
        return in_array($this->role, [0, 1, 2]);
    }
    public function can_edit_invoice()
    {
        return in_array($this->role, [0, 1, 2]);
    }
    public function can_delete_invoice()
    {
        return in_array($this->role, [0, 1, 2]);
    }
    public function can_add_payment()
    {
        return in_array($this->role, [0, 1, 3]);
    }
    public function can_edit_payment()
    {
        return in_array($this->role, [0, 1, 3]);
    }
    public function can_delete_payment()
    {
        return in_array($this->role, [0, 1]);
    }
    public function can_add_receive()
    {
        return in_array($this->role, [0, 1, 3]);
    }

    public function can_add_user()
    {
        return in_array($this->role, [0, 1]);
    }
}
