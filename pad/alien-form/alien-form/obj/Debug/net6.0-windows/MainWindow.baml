   M S B A M L   `   `   `  ����E  Aalien-form, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null'clr-namespace:alien_form
alien_form  5   	       alien_form.MainWindow   5   	   W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   *localclr-namespace:alien_form     5   	     � Title$  
MainWindow��5   	   $	��540��6   $	��800��6)   ���#333
�������.��5	      �  � RowDefinitions 5
   
   �� 5      $��80 �6   �� 5      $	��150 �6   �� 5      .+�5   
   �� $��36(�6   $��Center=�6"   $��Center=�6?   $��Bahnschrift Condensed)�6Z   $��0��6}   ,*Rejestracja konta bankowego (AD-Bank S.A.)6�   �� 5   
   $��1��6    �� Orientation$ 
Horizontal=�6"   .+�5      �� $
��Left=�6   $��10,0,0,0q�65   .+�5      �� $��LOGIN:��6   
�������$��Bahnschrift Condensed)�6<   $��24(�6_   �� 5      -   5         ��Name$ loginBox��5      $��20��6,   $	��100��68   �� 5      $��HASŁO:��6   
�������$��Bahnschrift Condensed)�6<   $��24(�6_   G� 5      -   5         G�Name$ passwordBox��5      $��20��63   $	��100��6?   5      �� 5      $
��Left=�6   $��30,0,0,0q�64   .+�5      �� $��Wybierz płeć:��6   
�������$��Bahnschrift Condensed)�6C   $��24(�6f   �� 5      -   5         ��Name$ genderPanel��5      .+�5      	�  	� 	GroupName$ gender��6"   ���	#FFD4CCCC$��Calibri)�6L   $��16(�6a   $��Mężczyzna��6o    d� 	IsChecked$
 TrueY�6�   	� 5       $ gender��6"   ���	#FFD4CCCC$��Calibri)�6L   $��16(�6a   $��Kobieta��6o   	� 5!      $ gender��6"   ���	#FFD4CCCC$��Calibri)�6L   $��16(�6a   $��Wolę nie podawać��6o   5"      5$      �� 5%      $
��Left=�6   $��30,0,0,0q�65   .+�5&      �� $��Wybierz datę urodzenia:��6   
�������$��Bahnschrift Condensed)�6M   $��24(�6p   (  "System.Windows.Controls.DatePicker  5'      -   5          Name$ dateOfBirth��5'      5(      �� 5)      $
��Left=�6   $��30,0,0,0q�65   .+�5*      �� $��Wybierz rodzaj konta:��6   
�������$��Bahnschrift Condensed)�6K   $��24(�6n   �� 5+      -   5        	 ��Name$	 accountType��5+      .@�5,      �� 
 �� 
IsSelected$

 True��6#   .��65   
Konto FREE6A   �� 5-      .��6$   Konto Premium63   �� 5.      .��6#   Konto Premium+63   5/      50      51      �� 54   
   $��2��6   $��20q�6"   .+�57      �� $!��Oceń nasz interfejs (1-5):��6   
�������$��Bahnschrift Condensed)�6L   $��16(�6o   $��Center=�6}   �� 58      -   5         ��Name$ 	guiReview��58       � Minimum$ 1Q�6(    � Maximum$ 5Q�64    �� TickPlacement$ BottomRight=�6@    �� TickFrequency$ 1Q�6\   $	��300��6n   6z   �� 5:      -   5         ��Name$ cbNewsletter��5:      $,��&Chcę zarejestrować się w newsletter��6-   $��13(�6[   
�������$��Cascadia Mono)�6|   $��0,30,0,0q�6�   6�   �� 5;      -   5         ��Name$ saveBtn��5;   '   $��0,10,0,0q�6   $��ZAREJESTRUJ!��68   $��2��6O   $��50��6\   $��Bahnschrift SemiBold)�6h   
���   �
����������	#FF1917176�   9� 5=      $��0,0,0,0q�6   .��5>      �� $
��Wrap=�6   $��12(�60   
�������$%��Bahnschrift SemiLight Condensed)�6Q   �� 6�   $���Rejestrując się, wyrażasz zgodę na przetwarzanie danych osobowych podanych w powyższym formularzu w celach handlowych i marketingowych przez AD-Bank S.A. oraz przez podmioty trzecie.��6�   6E  5?      �� 5A      -	   5         ��Name$
 info��5A      $	��asd��6"   $��2��60   
���  ��$��Bahnschrift Condensed)�6N   $��16(�6q   $��Center=�6   5C      5G      5H      