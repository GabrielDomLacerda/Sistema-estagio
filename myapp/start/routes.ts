/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Rotas com apelido para serem referenciadas no codigo(caso o / mude o apelido sempre será o mesmo :) )
// Só usar href= "{{ route('APELIDO') }}"
Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/login', 'SessionsController.login').as('sessions.login')

Route.get('/esquecisenha', 'SessionsController.forgetPass').as('sessions.forgetPass')

Route.post('/estudante/esquecisenha', 'EstudantesController.recoverPassStudent').as(
  'estudantes.recoverPassStudent'
)

Route.post('/empresa/esquecisenha', 'EmpresasController.recoverPassCompany').as(
  'empresa.recoverPassCompany'
)

Route.post('/recover', 'SessionsController.recover').as('sessions.recover')

Route.get(':tipo/cadastro', 'UsersController.create')
  .where('tipo', 'estudante|empresa')
  .as('users.create')

Route.post('empresa/cadastro', 'EmpresasController.store')
Route.post('estudante/cadastro', 'EstudantesController.store')

Route.get(':id/teste', 'EmpresasController.index')
