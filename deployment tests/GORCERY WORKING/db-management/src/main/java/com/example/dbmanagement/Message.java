package com.example.dbmanagement;


public class Message {
    private String msg;

    public Message(){}
    
    public Message(String msg){
        this.msg = msg;
    }

    public String getMessage(){
        return this.msg;
    }

    public void setMessage(String  msg){
        this.msg = msg;
    }
}