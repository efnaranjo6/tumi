<?php

namespace App\Factories;

use App\Interfaces\personaInterface;
use App\Services\persona;

class personaFactory
{
    public function make($nombre,$fecha,$correo,$area,$categoria,$empresa,$nivel,$min,$max): personaInterface{
      
                return new persona($nombre,$fecha,$correo,$area,$categoria,$empresa,$nivel,$min,$max);
           
        

    }
    
        
     
}
