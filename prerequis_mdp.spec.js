const { test, expect } = require('@playwright/test');

test.describe('Login', () => {



    test('Email + mdp obligatoire', async ({ page }) => {
            
        await page.goto("https://stg-kalamazoo.rajapack.xyz/");
    
        await page.getByRole('button', { name: "Identificarse" }).click();
    
        // 
        const LocatorCrear =  page.locator('#redirectCreateAccount');
        LocatorCrear.click();
        const LocatorBouton = page.locator('#btnNextWithRedict');
        await LocatorBouton.click();

        await expect(page.getByText('Este campo es obligatorio').first()).toBeVisible();

        
    })

    test('mdp prérequis non valide', async ({ page }) => {
            
    await page.goto("https://stg-kalamazoo.rajapack.xyz/");
    
        await page.getByRole('button', { name: "Identificarse" }).click();
    
        // 
        const LocatorCrear =  page.locator('#redirectCreateAccount');
        LocatorCrear.click();

        await page.locator('#IdentifiersLogin').fill('etiennetutu2800000@gmail.com');


        await page.locator('#IdentifiersPassword').fill('123dffggfdg');

        await page.locator('#btnNextWithRedict').click();
    
        await expect(page.getByText('Su contraseña no cumple los requisitos mínimos.').first()).toBeVisible();
    })

});
