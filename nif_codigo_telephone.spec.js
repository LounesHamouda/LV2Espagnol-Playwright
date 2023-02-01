test.describe('Création de compte échouée', () => {
  test.only('cas nif mauvais format', async ({ page }) => {
    await page.goto("https://stg-kalamazoo.rajapack.xyz/");
    await page.getByRole('button', { name: "Identificarse" }).click();
   
   //recup par id
    const LocatorCrear =  page.locator('#redirectCreateAccount');
    LocatorCrear.click();

    await expect(page).toHaveURL('https://stg-kalamazoo.rajapack.xyz/INTERSHOP/web/WFS/RAJA-KALAMAZOO-Site/es_ES/-/EUR/ViewUserLogin-Start?AccountCreation=true&Target=https%3A%2F%2Fstg-kalamazoo.rajapack.xyz%2F');
    
    const LocatorMail = page.locator('#IdentifiersLogin');
    await LocatorMail.fill('echouer@cool.com');

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
    await LocatorNif.fill('12345678o');

    const LocatorDirection = page.locator('#CompaniesAddress');
    await LocatorDirection.fill('pas loin des fleurs sur juine');

    const LocatorCodigo = page.locator('#CompaniesPostCode');
    await LocatorCodigo.fill('69420');

    const LocatorPoblacion = page.locator('#CompaniesCity');
    await LocatorPoblacion.fill('Pussay sur marne');

    const LocatorBoutonSuivant = page.locator('#nextButton6');
    await LocatorBoutonSuivant.click();


    // verif de l'identification du pb
    await expect(page.getByText('Formato de NIF incorrecto')).toBeVisible();
  });
});

test('cas nif trop court', async ({ page }) => {
  await page.goto("https://stg-kalamazoo.rajapack.xyz/");
  await page.getByRole('button', { name: "Identificarse" }).click();
 
 //recup par id
  const LocatorCrear =  page.locator('#redirectCreateAccount');
  LocatorCrear.click();

  await expect(page).toHaveURL('https://stg-kalamazoo.rajapack.xyz/INTERSHOP/web/WFS/RAJA-KALAMAZOO-Site/es_ES/-/EUR/ViewUserLogin-Start?AccountCreation=true&Target=https%3A%2F%2Fstg-kalamazoo.rajapack.xyz%2F');
  
  const LocatorMail = page.locator('#IdentifiersLogin');
  await LocatorMail.fill('echouer@cool.com');

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
  await LocatorNif.fill('12345678');

  const LocatorDirection = page.locator('#CompaniesAddress');
  await LocatorDirection.fill('pas loin des fleurs sur juine');

  const LocatorCodigo = page.locator('#CompaniesPostCode');
  await LocatorCodigo.fill('69420');

  const LocatorPoblacion = page.locator('#CompaniesCity');
  await LocatorPoblacion.fill('Pussay sur marne');

  const LocatorBoutonSuivant = page.locator('#nextButton6');
  await LocatorBoutonSuivant.click();


  // verif de l'identification du pb
  await expect(page.getByText('Tu CIF debe tener 9 caracteres')).toBeVisible();
});

test('cas Codigo Postal aberrant', async ({ page }) => {
  await page.goto("https://stg-kalamazoo.rajapack.xyz/");
  await page.getByRole('button', { name: "Identificarse" }).click();
 
 //recup par id
  const LocatorCrear =  page.locator('#redirectCreateAccount');
  LocatorCrear.click();

  await expect(page).toHaveURL('https://stg-kalamazoo.rajapack.xyz/INTERSHOP/web/WFS/RAJA-KALAMAZOO-Site/es_ES/-/EUR/ViewUserLogin-Start?AccountCreation=true&Target=https%3A%2F%2Fstg-kalamazoo.rajapack.xyz%2F');
  
  const LocatorMail = page.locator('#IdentifiersLogin');
  await LocatorMail.fill('echouer@cool.com');

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
  await LocatorCodigo.fill('694');

  const LocatorPoblacion = page.locator('#CompaniesCity');
  await LocatorPoblacion.fill('Pussay sur marne');

  const LocatorBoutonSuivant = page.locator('#nextButton6');
  await LocatorBoutonSuivant.click();


  // verif de l'identification du pb
  await expect(page.getByText('El código postal indicado no es válido. Deber contener 5 cifras')).toBeVisible();
});

test('cas telephone aberrant', async ({ page }) => {

  
  await page.goto("https://stg-kalamazoo.rajapack.xyz/");
  await page.getByRole('button', { name: "Identificarse" }).click();
 
 //recup par id
  const LocatorCrear =  page.locator('#redirectCreateAccount');
  LocatorCrear.click();

  await expect(page).toHaveURL('https://stg-kalamazoo.rajapack.xyz/INTERSHOP/web/WFS/RAJA-KALAMAZOO-Site/es_ES/-/EUR/ViewUserLogin-Start?AccountCreation=true&Target=https%3A%2F%2Fstg-kalamazoo.rajapack.xyz%2F');
  
  const LocatorMail = page.locator('#IdentifiersLogin');
  await LocatorMail.fill('echouer@cool.com');

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
  await Locatortel.fill('6272727ft');

  const LocatorBoutonSuivant2 = page.locator('#nextButton7');
  await LocatorBoutonSuivant2.click();



  // verif pour être sur la nouvelle page
  await expect(page.getByText('El formato indicado no es correcto. Debe tener 9 cifras y empezar por 6,7,8 o 9. Los teléfonos extranjeros deben empezar por 00')).toBeVisible();
});
