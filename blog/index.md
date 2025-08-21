### Intro
Hi there wassup guys this is me `efault` let us study about some ret2win technique in binary exploitation, were we redirect the corrupted instruction pointer (`eip` in x86 and `rip` in x64) to the address of our desired function that we want to execute. First let us consider a simple C program
```C
#include <stdio.h>
#include <stdlib.h>
#define BUFFER 50
void win(){
    printf("YOU GOT THAT\n");
}
int main(int argc, char **argv){
    char buff[BUFFER];
    printf("Enter something please: \n");
    gets(buff); //vulnerable parameter
    printf("OK\n");
    return 0;
}
```
Ok so thats fine right?
Let us test out the GIF
<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXJudm5uZjI2YXQzeGhqd2pxNXczYm8zMmh2NDNheGUzczAyMmZtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RVTTCmNEtg10gtYimN/giphy.gif" width="200" alt="Funny cat" />
