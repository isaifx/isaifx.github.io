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
