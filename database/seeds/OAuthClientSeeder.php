<?php

use Illuminate\Database\Seeder;

class OAuthClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table('oauth_clients')->truncate();
        DB::statement("SET foreign_key_checks=1");
        
        DB::table('oauth_clients')->insert([
            'id' => 'Someline' . 'FvGXRmBv',
            'secret' => 'WFYBPbkOBv7hTby8vGL2SPOOq2GKYQdSIDGXcLsS',
            'name' => 'Someline iOS App',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now(),
        ]);
    }
}
