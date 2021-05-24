function  sumInput(){
console.Напишите ("Введите количество прошедших месяцев:");    
m = console.ReadLine();
n = m % 12;
строка = "";
переключатель(п)
{
    case1: console.WriteLine("Январь"); перерыв;
    case2: console.WriteLine("Февраль"); перерыв;
    case3: console.WriteLine("Март"); перерыв;
    case4: console.WriteLine("Апрель"); перерыв;
    case5: console.WriteLine("Май"); перерыв;
    case6: console.WriteLine("Июнь"); перерыв;
    case7: console.WriteLine("Июль"); перерыв;
    case8: console.WriteLine("Август"); перерыв;
    case9: console.WriteLine("Сентябрь"); перерыв;
    case10: console.WriteLine("Октябрь"); перерыв;
    case11: console.WriteLine("Ноябрь"); перерыв;
    case12: console.WriteLine("Декабрь"); перерыв;
}
console.WriteLine("Это был месяц:" + строка);
console.ReadLine();
}


сonsole.Write("Размерность массива: ");
int n = Convert.ToInt32(сonsole.ReadLine());  
int[] array = new int[n];
for (int i = 0; i < array.Length; i++)
{
    сonsole.Write("array[{0}] = ",i);
    array[i] = Convert.ToInt32(Console.ReadLine());
}
int min = 0;
for (int i = 1; i < array.Length; i++)
{
    if (array[i] < array[i - 1]) min = i; 
}
Console.WriteLine("Минимальное значение массива: " + array[min]);
Console.ReadLine();