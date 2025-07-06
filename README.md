# Git flow
### Branch
- master/main: Stable branch
- develop: unstable branch, used for development, can be reset anytime with an announcement
- qc/staging: unstable branch, used for QC team, can be reset anytime with an announcement
- uat: Used for sanity testing before release to production
- feature: feature branch, used for developing a story
- hotfix: Hotfix branch when an incident occurs or bug fix on production env
- bugfix: bugfix branch when QC team detect on qc/uat

### Step to step when implement feature

```bash
# create new branch
$ git checkout -b {name branch}

# flow create feature A
# 1. create name featureA branch from main branch
$ git checkout main
$ git checkout -b {name branch}
$ git add .
$ git commit -m "{message}"
$ git push

# 2. create PR
# click Pull Request tab -> click "New Pull Request" -> choose base (target branch) and compare (your branch) -> click Create Pull Request
```

### Resolve conflict code
#### Why is conflict code 
When many branch code on a file.

#### Step to step to resolve conflict
- Ex: conflict code at main branch
- branch: huy/guestGreeting bị conflict

```bash
# 1. checkout new branch from base branch to fix conflict
$ git checkout main
$ git checkout -b huy/guestGreeting-main-fc

# 2. merge huy/guestGreeting branch into uy/guestGreeting-main-fc branch
$ git merge --no-ff huy/guestGreeting

# 3. push code after fix done conflict
$ git add .
$ git commit
$ git push

# 4. create PR
```


## React lifecycle hooks
- first render: component render UI with initial state
- re-render (next render): component reder UI with new state
- unmount: component removed out of DOM html

## Naming conventions
- camelCase: product, productDetail, getInformation ....
  using:
    - name variable
    - name function 
    - name folder
    - name file

- UPPERCASE: STATUS, ENV, API_BE ...
  using:
    - name constant in config ...

- snake_case: product, product_detail, user_information ....
  using
    - pass body data { first_name: 'abc', last_name: '123' }

- PascalCase: Product, ProductDetail, EffectHook...
  using: 
    - name function react compo
    nent
    - name file react component


### Performance optimize
- optimize performance web
  - lighthouse: First Contentful Paint (FCP), Full Content Paint (FCP), Cumulative Layoutshift (CLS) ..
  - how to improve fast load time website
- optimize peformance react
  - prevent component re-render unnecessary
  - lazy load component -> just load resource for this page
  - code split component -> mình sẽ load resource when user interactive, thay vì load resource cho lần đầu
  - infinite scroll load

### Authenticate & authorize
- Authenticate: xác nhận
    => kiểm tra xem account có đăng ký trong hệ thống hay không.
- Authorize from FE: phân quyền (account A)
  => phân quyền xem account đó có những permission gì
  - by Page
    - page/products -> read
    - page/delete -> can't access
    - management/user -> can't access -> UI show 401 not authorize. Please contact to admin
  - by action
    - page/prodcts -> read, create
- Authorize from BE
 - Nó sẽ dựa vào access token
 - workflow: 
    - register: user A register -> BE generate access token A (kèm role) 
    - login: user A login -> BE return access token A -> FE save access token A into localstore
    - action: user A performs an action create (call api /api/user/create kèm theo access token) -> BE check access token có what role? -> member -> return can't action