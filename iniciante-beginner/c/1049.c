/**
 * Source: Beecrowd
 * @problem: 1049 - Animal
 * @subject: Selection
 *
 * @author: Letícia Cruz
 * @date: 2020-08-23
 */

#include <stdio.h>
#include <string.h>

int main(void)
{
    char subfilo[15], classe[15], alimentacao[15];
    scanf("%s\n %s\n %s", subfilo, classe, alimentacao);

    if (strcmp(subfilo, "vertebrado") == 0)
    {
        if (strcmp(classe, "ave") == 0)
        {
            if (strcmp(alimentacao, "carnivoro") == 0)
            {
                printf("aguia\n");
            }
            else
            {
                printf("pomba\n");
            }
        }
        else
        {
            if (strcmp(alimentacao, "onivoro") == 0)
            {
                printf("homem\n");
            }
            else
            {
                printf("vaca\n");
            }
        }
    }
    else
    {
        if (strcmp(classe, "inseto") == 0)
        {
            if (strcmp(alimentacao, "hematofago") == 0)
            {
                printf("pulga\n");
            }
            else
            {
                printf("lagarta\n");
            }
        }
        else
        {
            if (strcmp(alimentacao, "hematofago") == 0)
            {
                printf("sanguessuga\n");
            }
            else
            {
                printf("minhoca\n");
            }
        }
    }

    return 0;
}