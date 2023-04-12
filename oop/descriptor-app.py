class TextField:
    def __init__(self, value=None, options={}):
        self._value = value
        self._options = options


    def __get__(self, instance, owner):
        return self._value


    def __set__(self, instance, value):
                        
        if "type" in self._options:
            if type(value) != self._options['type']:
                raise TypeError(f"Wartość powinna mieć typ: {self._options['type']}")


        if "minLen" in self._options:
            if(len(value) < self._options["minLen"]):
                raise ValueError(f"Tekst musi mieć minimum {self._options['minLen']} znaki")

        if "maxLen" in self._options:
            if(len(value)) > self._options["maxLen"]:
                raise ValueError(f"Test musi mieć maksymalnie {self._options['maxLen']} znaków")
        
        if "valMin" in self._options:
            if(value < self._options["valMin"]):
                raise ValueError(f"Wartość musi być minimalnie: {self._options['valMin']}")

        if "valMax" in self._options:
            if(value > self._options["valMax"]):
                raise ValueError(f"Wartość musi być maksymalna {self._options['valMax']}")

        
        self._value = value


    def __delete__(self, instance):
        print("Usuwanie wartości")
        del self._value

class Uczen:
    imie = TextField(options = {'minLen' : 3, 'maxLen': 10, 'type': str})
    wiek = TextField(options = {'valMin': 1, 'valMax': 25, 'type': int})
    wzrost = TextField(options = {'valMin': 100, 'type': int})
    miejsce_zamieszkania = TextField(options = {'type': str})

uczen = Uczen()
uczen.imie = 'adam'
uczen.wiek = 12
uczen.wzrost = 100
uczen.miejsce_zamieszkania = 'Rolna 10'

print(uczen.imie, uczen.wiek, uczen.wzrost, uczen.miejsce_zamieszkania)
