<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->renameColumn('id', 'role_id');
            $table->renameColumn('title','role_title');
            $table->renameColumn('description','role_description');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('roles', function (Blueprint $table) {
            //
            $table->renameColumn('role_id','id');
            $table->renameColumn('role_title','title');
            $table->renameColumn('role_description','description');
        });
    }
};
