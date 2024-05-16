<?php

namespace App\Services;

use App\Interfaces\personaInterface;
use Illuminate\Support\Facades\DB;
class persona implements personaInterface
{
    private $nombre;
    private $fecha; 
    private $correo;
    private $area;
    private $categoria;
    private $empresa;
    private $nivel;
    private $min;
    private $max;
    public function __construct($nombre,$fecha,$correo,$area,$categoria,$empresa,$nivel,$min,$max){
        $this->nombre=$nombre;
        $this->fecha=$fecha; 
        $this->correo=$correo;
        $this->area=$area;
        $this->categoria=$categoria;
        $this->empresa=$empresa;
        $this->nivel=$nivel;
        $this->min=$min;
        $this->max=$max;
    }
    public function getPersona(){
        $data=DB::table('persona')
            ->offset($this->min)
            ->limit($this->max)
        ->get();
        return $data;
    }
    public function getInsercion(){
        DB::table('persona')->insert([
        'nombre' => $this->nombre,
        'fecha' =>  $this->fecha,
        'correo'=>$this->correo,
        'area'=>$this->area,
        'categoria'=>$this->categoria,
        'empresa'=>$this->empresa,
        'nivel'=>$this->nivel,
]);
    }

}