<?php

namespace App\Http\Controllers;

use App\Factories\personaFactory;
use Illuminate\Http\Request;
class personaController extends Controller
{
    protected $personaFactory;
    public function __construct(personaFactory $personaFactory){
        $this->personaFactory = $personaFactory;
    }
    public function insert(Request $request)
    {
        $data=$request->json()->all();
       
        $nombre=$data["nombre"];
        $fecha=$data["fecha"];
        $correo=$data["correo"];
        $area=$data["correo"];
        $categoria=$data["categoria"];
        $empresa=$data["empresa"];
        $nivel=$data["nivel"];
        
        $persona = $this->personaFactory->make($nombre,$fecha,$correo,$area,$categoria,$empresa,$nivel,'','');
        return $persona->getInsercion();
    
    }
    public function select($max,$min){
        $persona = $this->personaFactory->make('','','','','','','',$max,$min);
        return $persona->getPersona();
       
    }
    
}