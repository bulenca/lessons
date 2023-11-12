using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace alien_form
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {


        public MainWindow()
        {
            InitializeComponent();


        }

        private void saveData(string value) {
            var saveFileDialog1 = new SaveFileDialog
            {
                InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.Personal),
                Filter = string.Format("{0}Text files (*.txt)|*.txt|All files (*.*)|*.*", "ARG0"),
                RestoreDirectory = true,
                CheckFileExists = false
            };
            if (saveFileDialog1.ShowDialog() == true)
                File.WriteAllText(saveFileDialog1.FileName, value);
        }


        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var loginValue = loginBox.Text;
            var passwordValue = passwordBox.Password;
            var genderValue = (genderPanel.Children.OfType<RadioButton>().FirstOrDefault(r => r.IsChecked.HasValue && r.IsChecked.Value)).Content;
            var dateOfBirthValue = dateOfBirth.Text;
            var accountTypeValue = accountType.Text;
            var guiReviewValue = guiReview.Value;
            var newsletterValue = cbNewsletter.IsChecked;




            if(loginValue == "" || passwordValue == "" || dateOfBirthValue == "")
            {
                info.Content = "Musisz wypełnić wszystkie pola!";
                return;
            } else
            {
                saveData($"Login: {loginValue}\nHasło: {passwordValue}\nPłeć: {genderValue}\nData urodzenia: {dateOfBirthValue}\nTyp konta: {accountTypeValue}\nNewsletter: {newsletterValue}\nOpinia na temat interfesju: {guiReviewValue}");
                info.Content = "";
            }






        }

        private void ComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {

        }

        private void Slider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {

        }

        private void cbNewsletter_Checked(object sender, RoutedEventArgs e)
        {

        }
    }
}
