#include <stdio.h>

int main()
{
    int L, C;
    scanf("%d", &L);
    scanf("%d", &C);

    int tipo1Total, tipo1Externo, tipo1Interno, tipo2;
    tipo1Externo = L * C;
    tipo1Interno = (L - 1) * (C - 1);
    tipo2 = (L - 1) * 2 + (C - 1) * 2;

    tipo1Total = tipo1Externo + tipo1Interno;

    printf("%d\n", tipo1Total);
    printf("%d\n", tipo2);

    return 0;
}