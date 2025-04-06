# Git flow
### Branch
- master/main: Stable branch
- develop: unstable branch, used for development, can be reset anytime with an announcement
- qc/staging: unstable branch, used for QC team, can be reset anytime with an announcement
- uat: Used for sanity testing before release to production
- feature: feature branch, used for developing a story
- hotfix: Hotfix branch when an incident occurs or bug fix on production env
- bugfix: bugfix branch when QC team detect on qc/uat

### Command

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
# click Pull Request tab -> click "New Pull Request"


```
