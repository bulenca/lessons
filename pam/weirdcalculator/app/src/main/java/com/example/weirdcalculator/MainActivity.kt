package com.example.weirdcalculator

import android.app.DatePickerDialog
import android.os.Bundle
import android.view.View
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.DatePicker
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.Spinner
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import org.w3c.dom.Text
import java.util.Calendar


class MainActivity : AppCompatActivity() {
    lateinit var ageText : TextView
    lateinit var checkBtn : Button
    lateinit var editTextAge : EditText
    lateinit var ageInfo : TextView
    lateinit var genderSpinner: Spinner
    lateinit var restLifeBox : LinearLayout
    lateinit var restLifeBtn : Button
    lateinit var restLifeText : TextView
    lateinit var restLifeHours : TextView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val genders = resources.getStringArray(R.array.Genders)

        ageText = findViewById(R.id.ageText)
        checkBtn = findViewById(R.id.checkBtn)
        editTextAge = findViewById(R.id.editTextAge)
        ageInfo = findViewById(R.id.ageInfo)
        genderSpinner = findViewById(R.id.genderSpinner)
        restLifeBox = findViewById(R.id.restLifeBox)
        restLifeBtn = findViewById(R.id.restLifeBtn)
        restLifeText = findViewById(R.id.restLifeText)
        restLifeHours = findViewById(R.id.restLifeHours)

        val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, genders)
        genderSpinner.adapter = adapter


        var restLife = 0


        checkBtn.setOnClickListener {
            restLifeText.text = ""
            restLifeHours.text = ""
            if(editTextAge.text.isEmpty() || editTextAge.text.toString().toInt() > 200){
                ageText.text=""
                ageInfo.text=""
                restLife = 0
                restLifeBox.visibility = View.INVISIBLE
                Toast.makeText(applicationContext, "Podaj właściwy wiek!", Toast.LENGTH_LONG).show()
                return@setOnClickListener
            }

            val age = editTextAge.text.toString()
            val selectedGender = genderSpinner.selectedItem.toString()

            ageText.text = "Masz $age lat i twoja płeć to $selectedGender"
            restLifeBox.visibility = View.VISIBLE

            if(selectedGender == "Mężczyzna"){
                restLife = 73 - age.toInt()
                if(age.toInt() > 73) {
                    ageInfo.text = "Żyjesz już więcej o ${-restLife} lat/a niż to statystyka przewidziała!"
                } else if (age.toInt() == 73) {
                    ageInfo.text = "Według statystyki w tym roku umrzesz...!"
                } else {
                    ageInfo.text = "Statystycznie zostało ci $restLife lat/a życia"
                }

            } else {
                restLife = 79 - age.toInt()
                if(age.toInt() > 79) {
                    ageInfo.text = "Żyjesz już więcej o ${-restLife} lat/a niż to statystyka przewidziała!"
                } else if (age.toInt() == 79) {
                    ageInfo.text = "Według statystyki w tym roku umrzesz...!"
                } else {
                    ageInfo.text = "Statystycznie zostało ci $restLife lat/a życia"
                }
            }


        }

        fun showDatePickerDialog() {
            val calendar = Calendar.getInstance()
            val year = calendar.get(Calendar.YEAR)
            val month = calendar.get(Calendar.MONTH)
            val day = calendar.get(Calendar.DAY_OF_MONTH)

            val datePickerDialog = DatePickerDialog(
                this,
                DatePickerDialog.OnDateSetListener { _: DatePicker, selectedYear: Int, monthOfYear: Int, dayOfMonth: Int ->

                    val selectedDate = Calendar.getInstance()
                    selectedDate.set(selectedYear, monthOfYear, dayOfMonth)

                    val currentDate = Calendar.getInstance()
                    val deathDate = currentDate.clone() as Calendar
                    deathDate.add(Calendar.YEAR, restLife)

                    val differenceInMillis = selectedDate.timeInMillis - currentDate.timeInMillis
                    val daysDifference = differenceInMillis / (24 * 60 * 60 * 1000)


                    val daysDifferenceFuture = ((deathDate.timeInMillis - selectedDate.timeInMillis) / (24 * 60 * 60 * 1000)).toInt()

                    restLifeText.text = "W $selectedYear-${monthOfYear + 1}-$dayOfMonth zostanie ci statystycznie $daysDifferenceFuture dni życia."
                    restLifeHours.text = "Do wybranej daty pozostało $daysDifference dni."

                },
                year,
                month,
                day
            )

            datePickerDialog.datePicker.minDate = System.currentTimeMillis()
            datePickerDialog.show()
        }

        restLifeBtn.setOnClickListener {
            showDatePickerDialog()
        }
    }
}