<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Factories\personaFactory;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;
class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
  
    public function test_example()
    {
       
    $data=DB::table('persona')
            ->offset(0)
            ->limit(5)
        ->get();
        $this->assertNotEmpty($data);
        $this->assertInstanceOf('Illuminate\Support\Collection', $data);
    }
}
