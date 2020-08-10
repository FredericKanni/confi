<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyCommandesTableBis extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('commande', function (Blueprint $table) {
            $table->unsignedBigInteger('id_adresse_livraison')->nullable();
            $table->foreign('id_adresse_livraison')->references('id')->on('adresses');

            $table->unsignedBigInteger('id_adresse_facturation')->nullable();
            $table->foreign('id_adresse_facturation')->references('id')->on('adresses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('commande');
        Schema::enableForeignKeyConstraints();
    }
}
