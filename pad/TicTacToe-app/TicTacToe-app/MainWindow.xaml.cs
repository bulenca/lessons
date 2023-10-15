using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace TicTacToe_app
{
    public partial class MainWindow : Window
    {
        private Button[] btnArray = new Button[9];
        private Label infoLabel = new Label();
        private int _playerNumber = 1;
        private int[,] field = new int[3,3] ;
        private int score1 = 0;
        private int score2 = 0;
        public MainWindow()
        {
            InitializeComponent();
            InitButtonArray();
            infoLabel = FindName("info") as Label;

        }
        private void InitButtonArray()
        {
            for (int i = 0; i < btnArray.Length; i++)
            {
                btnArray[i] = FindName($"btn{i}") as Button;

            }

        }


        private void setField(int column, int row)
        {
            field[column, row] = _playerNumber;
        }

        private int getField(int column, int row)
        {
            return field[column, row];
        }
        private void setInfoText(string text)
        {
            infoLabel.Content = text;
        }
        private void changePlayerTurn() {
            if(_playerNumber == 1)
            {
                setInfoText("Ruch gracza 2");
                _playerNumber = 2;
            } 
            else if(_playerNumber == 2)
            {
                setInfoText("Ruch gracza 1");
                _playerNumber = 1;
            }
        }

        private void addScore()
        {
            Label labelScore = new Label();
            labelScore = FindName("score") as Label;
            if(_playerNumber == 1) score1++;
            else score2++;
            labelScore.Content = score1 + ":" + score2;

        }

        private bool checkWin()
        {
            // vertical
            if (field[0, 0] == _playerNumber && field[0, 1] == _playerNumber && field[0,2] == _playerNumber)
            {
                return true;
            }
            else if (field[1, 0] == _playerNumber && field[1, 1] == _playerNumber && field[1, 2] == _playerNumber)
            {
                return true;
            }
            else if (field[2, 0] == _playerNumber && field[2, 1] == _playerNumber && field[2, 2] == _playerNumber)
            {
                return true;
            }

            // horizontal
            if (field[0, 0] == _playerNumber && field[1, 0] == _playerNumber && field[2, 0] == _playerNumber)
            {
                return true;
            }
            else if (field[0, 1] == _playerNumber && field[1, 1] == _playerNumber && field[2, 1] == _playerNumber)
            {
                return true;
            }
            else if (field[0, 2] == _playerNumber && field[1, 2] == _playerNumber && field[2, 2] == _playerNumber)
            {
                return true;
            }

            // Diagonal
            if (field[0,0] == _playerNumber && field[1, 1] == _playerNumber && field[2, 2] == _playerNumber)
            {
                return true;
            } if (field[0,2] == _playerNumber && field[1, 1] == _playerNumber && field[2, 0] == _playerNumber)
            {
                return true;
            }

            return false;
        }

        private bool checkDraw()
        {
            if (field[0, 0] != 0 && field[0, 1] != 0 && field[0, 2] != 0 && field[1, 0] != 0 && field[1, 1] != 0 && field[1, 2] != 0 && field[2, 0] != 0 && field[2, 1] != 0 && field[2, 2] != 0)
            {
                return true;
            }

            return false;
        }

        private void resetField()
        {
            for(int c = 0; c < 3; c++)
            {
                for (int r = 0; r < 3; r++)
                {
                    field[c, r] = 0;
                }
            }

            foreach (var btn in btnArray)
            {
                btn.Content = "";
            }
        }
        private void onClick(object sender, RoutedEventArgs e)
        {

            var button = sender as Button;
            int btnNumber = Int16.Parse((button.Name).Substring(3));
            int column = btnNumber % 3;
            int row = btnNumber / 3;

            if (getField(column, row) != 0)
            {
                return;
            }

            setField(column, row);

            if (_playerNumber == 1)
            {
                button.Content = "X";
            }
            else
            {
                button.Content = "O";
            }

            bool isWin = checkWin();
            if (isWin)
            {
                setInfoText("Wygrał gracz " + _playerNumber);
                resetField();
                addScore();
            }
            else if (checkDraw())
            {
                setInfoText("Remis");
                resetField();
            }
            else changePlayerTurn();

            
        }
    }
}
