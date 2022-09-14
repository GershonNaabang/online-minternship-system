<?php

class dbConn
{
//    database connection properties
    protected $host = 'localhost';
    protected $user = 'root';
    protected $password = '';
    protected $dbname = 'internship_sys';

//    connection properties
    public $con = null;
    public function __construct(){
        $this ->con = mysqli_connect($this->host, $this->user,$this->password,$this->dbname);
        if ($this->con->connect_error){
            echo "failed to connect".$this->con->connect_error;
        }
    }


    public function __distruct(){
        $this->closeConnection();
    }
//    methold for clossing connection
    protected function closeConnection(){
        if ($this->con != null){
            $this->con->close();
            $this->con=null;
        }
    }
}

