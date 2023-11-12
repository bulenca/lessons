package com.example.new_project

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    lateinit var textViewInput : TextView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textViewInput = findViewById(R.id.textViewInput)

    }

    fun checkSymbols(): String {
        if(textViewInput.text.contains("+")) {
            return "+"
        }
        return ""
    }

    fun onDigit(view: View){
        textViewInput?.append((view as Button).text)
    }

    fun onClear(view: View){
        textViewInput?.text="0"
    }

    fun onAdd(view: View){
        if(!textViewInput.text.contains("+")) {
            textViewInput?.append((view as Button).text)
        }
    }

    fun onEqual (view: View){
        var dataFromTextView = textViewInput?.text.toString()

        if(checkSymbols() == "+"){
            var (one, two) = dataFromTextView.split("+")
            if(two == ""){
                textViewInput.text = one.toString()
                return
            }
            textViewInput.text = (one.toDouble() + two.toDouble()).toString()

        }





        // toDouble()
    }
}