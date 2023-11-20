package com.example.new_project

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import kotlin.math.sqrt
import kotlin.math.pow
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    lateinit var textViewInput : TextView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textViewInput = findViewById(R.id.textViewInput)

    }

    fun checkSymbols(): String {
        var possibleSymbols : String
        if(textViewInput.text.contains("E-")) {
            possibleSymbols = textViewInput.text.toString().split("E-")[1]
        } else if (textViewInput.text.contains("E+")){
            possibleSymbols = textViewInput.text.toString().split("E+")[1]
        } else {
            possibleSymbols = textViewInput.text.toString()
        }
        var symbol = with(possibleSymbols) {
            when {
                contains("+") -> "+"
                contains("-") -> "-"
                contains("/") -> "/"
                contains("*") -> "*"
                contains("^") -> "^"
                contains("√") -> "√"
                else -> ""
            }
        }
        return symbol
    }

    fun onDigit(view: View){
        if(textViewInput.text.toString() == "0") {
            textViewInput.text = ((view as Button).text)
        } else {
            textViewInput?.append((view as Button).text)
        }
    }

    fun onClear(view: View){
        textViewInput?.text="0"
    }

    fun onSymbol(view: View){
        if(checkSymbols() == "") {
            textViewInput?.append((view as Button).text)
        }
    }

    fun onRoot(view: View){
        if(checkSymbols() == "") {
            var x : Double = (textViewInput.text).toString().toDouble()
            textViewInput.text = (sqrt(x)).toString()
        }
    }

    fun onDot(view: View){
        if(checkSymbols() == "" && !textViewInput.text.contains(".")){
            textViewInput?.append((view as Button).text)
        }
        else if (checkSymbols() != "") {
            var dataFromTextView = textViewInput?.text.toString()
            var (one, two) = dataFromTextView.split(checkSymbols())

            if(!two.contains(".")) {
                textViewInput?.append((view as Button).text)
            }
        }
    }

    fun calculate(symbol : String) {
        var dataFromTextView = textViewInput?.text.toString()





        var (one, two) = dataFromTextView.split(symbol)
        if(two == ""){
            textViewInput.text = one.toString()
            return
        }


            when(symbol) {
                "+" -> textViewInput.text = (one.toDouble() + two.toDouble()).toString()
                "-" -> textViewInput.text = (one.toDouble() - two.toDouble()).toString()
                "/" -> {
                    if(two == "0"){
                        Toast.makeText(applicationContext,"NIE MOŻNA DZIELIC PRZEZ ZERO",Toast.LENGTH_LONG).show()
                        textViewInput.text = (one.toDouble()).toString()
                    } else {
                        textViewInput.text = (one.toDouble() / two.toDouble()).toString()

                    }
                }
                "*" -> textViewInput.text = (one.toDouble() * two.toDouble()).toString()
                "^" -> textViewInput.text = (one.toDouble().pow(two.toDouble())).toString()


                else -> ""
            }
        }


    fun onEqual (view: View){
        calculate(checkSymbols())
    }
}