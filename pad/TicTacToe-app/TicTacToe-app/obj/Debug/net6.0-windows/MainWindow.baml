   M S B A M L   `   `   `  ����H  DTicTacToe-app, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null-clr-namespace:TicTacToe_appTicTacToe_app  5   	       TicTacToe_app.MainWindow   5   	   W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   -localclr-namespace:TicTacToe_app     5   	     � Title$  Tic Tac Toe - game��5   	   $	��630��6$   $	��800��61   .��5	      � $	��400��6   $	��400��6    � ColumnDefinitions 5
   
   �� 5      �� 5      �� 5       � RowDefinitions 5   
   �� 5      �� 5      �� 5      �� 5      �� 5      .+�5   
   �� -   5         ��Name$
 btn0��5      $��0��6    $��0��60   6=   �� 5   
   -   5        $
 btn1��5      $��1��6    $��0��60   6=   �� 5   
   -   5        $
 btn2��5      $��2��6    $��0��60   6=   �� 5   
   -   5        $
 btn3��5      $��0��6!   $��1��61   6>   �� 5   
   -   5        $
 btn4��5      $��1��6!   $��1��61   6>   �� 5   
   -   5        $
 btn5��5      $��2��6    $��1��60   6=   �� 5   
   -   5        $
 btn6��5      $��0��6   $��2��6/   6<   �� 5   
   -   5        $
 btn7��5      $��1��6   $��2��6/   6<   �� 5   
   -	   5        $
 btn8��5      $��2��6   $��2��6/   6<   �� 5    
   -
   5         ��Name$
 info��5       $��Rozpocznij grę.��6   $��Center=�68   $��3��6U   $��Center=�6b   $��32(�6}   $��3��6�   �� 5!   
   -   5        $ score��5!      $	��0:0��6   $��Center=�6-   $��4��6J   $	��Top=�6W   $��32(�6o   $��1��6}   $��0,1,0,0q�6�   5"      5#      