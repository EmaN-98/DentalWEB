<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true);
    }

    public function testGetAppointmentsForDoctor(){
        
        $response = $this->json('GET','api/getAppointmentsForDoctor/a');

        $response
            ->assertStatus(200);

    }

    public function testGetAppointmentsForDoctor404(){
        
        $response = $this->json('GET','api/getAppointmentsForDoctor/');

        $response
            ->assertStatus(404);

    }

    public function testGetAppointmentsForGraphic404(){
        
        $response = $this->get('api/getAppointmentsForGraphic/');

        $response
            ->assertStatus(404);

    }    

    public function testGetAppointmentsForGraphic(){
        
        $response = $this->get('api/getAppointmentsForGraphic/z');

        $response
            ->assertStatus(200);

    }    

    public function testRegisterUser()
    {
         $response = $this->post('api/register', ['name' => 'E','email'=>'E','password'=>'E']);
         $response
             ->assertStatus(201);
             
    }

    //public function testGetAppointmentsForDoctor2(){

    //    $response = $this->json('GET','api/getAppointmentsForDoctor/a');

        // $response
        // ->assertJson(fn (AssertableJson $json) =>
        //     $json->where('id', 6)
        //          ->where('name', 'uu')
        //          ->where('email','uu')
        //          //->where('email_verified_at',null)
        //          //->where('services',null)
        //          ->where('appointmentDate','2021-06-01')
        //          ->where('appointmentDoctor','a')
        //          ->where('role','patient')
        //          //->where('created_at',null)
        //          //->where('updated_at',null)
        //          ->etc()
        // );

  //  }
}
