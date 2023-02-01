const { test, expect } = require('@playwright/test');


test.only('cas passant', async ({ page }) => {

  
    await page.goto("https://stg-kalamazoo.rajapack.xyz/");
  // Create a locator.

  /* 
    const LocatorUsername = page.getByPlaceholder("Username");
    const LocatorPassword= page.getByPlaceholder("Password");
    const LocatorBouton= page.locator("css=#login-button");
    const LocatorErreur= page.locator('data-test=error')
  
*/

    await page.getByRole('button', { name: "Identificarse" }).click();
   
   //recup par id
    const LocatorCrear =  page.locator('#redirectCreateAccount');
    LocatorCrear.click();

    await expect(page).toHaveURL('https://stg-kalamazoo.rajapack.xyz/INTERSHOP/web/WFS/RAJA-KALAMAZOO-Site/es_ES/-/EUR/ViewUserLogin-Start?AccountCreation=true&Target=https%3A%2F%2Fstg-kalamazoo.rajapack.xyz%2F');
    
    const LocatorMail = page.locator('#IdentifiersLogin');
    await LocatorMail.fill('etiennetutu2800000@gmail.com');

    const LocatorMdp = page.locator('#IdentifiersPassword');
    await LocatorMdp.fill('JaimeLesFleurDu28');

    const LocatorBouton = page.locator('#btnNextWithRedict');
    await LocatorBouton.click();

    // on est sur la bonne partie du formulaire ???

    await expect(page.getByRole('heading', { name: 'Valida' })).toBeVisible();

    //remplissage de la nouvelle page

    const LocatorNombre = page.locator('#CompaniesName');
    await LocatorNombre.fill('Etienne');

    const LocatorNif = page.locator('#CompaniesTVANumber');
    await LocatorNif.fill('12345678Z');

    const LocatorDirection = page.locator('#CompaniesAddress');
    await LocatorDirection.fill('pas loin des fleurs sur juine');

    const LocatorCodigo = page.locator('#CompaniesPostCode');
    await LocatorCodigo.fill('69420');

    const LocatorPoblacion = page.locator('#CompaniesCity');
    await LocatorPoblacion.fill('Pussay sur marne');

    const LocatorBoutonSuivant = page.locator('#nextButton6');
    await LocatorBoutonSuivant.click();


    // verif pour être sur la nouvelle page


    await expect(page.getByRole('heading', { name: 'Háblanos' })).toBeVisible();

    //remplissage de la nouvelle page 

    const LocatorNombre2 = page.locator('#InfoFirstname');
    await LocatorNombre2.fill('Etienne');

    const LocatorPrimer = page.locator('#InfoLastname');
    await LocatorPrimer.fill('Tulipe');

    const Locatortel = page.locator('#InfoMobile');
    await Locatortel.fill('627272772');

    const LocatorBoutonSuivant2 = page.locator('#nextButton7');
    await LocatorBoutonSuivant2.click();



    // verif pour être sur la nouvelle page
    await expect(page.getByRole('heading', { name: 'Preferencias de suscripción' })).toBeVisible();
    
    // clic sur le checkmark
    const LocatorCheck = page.locator('#AcceptPrivacyPolicy');
    await LocatorCheck.click();


    const LocatorBoutonSuivant3 = page.locator('#submit-create');
    await LocatorBoutonSuivant3.click();

    const locatorTriste = page.locator('#nanoModalBtn');
    await locatorTriste.click();
    
    // on vérifie l'url afficher 

    await expect(page).toHaveURL('https://stg-kalamazoo.rajapack.xyz/');

    
  
  });
  