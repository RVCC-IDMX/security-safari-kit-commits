# Git History Cleanup

This branch documents the removal of sensitive data from git history.

## What was removed

The `.env` file containing `API_KEY=sk_live_real_secret_oops` was removed from all commits using `git filter-branch`.

## Command used

```bash
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all
```

## Next steps

1. Rotate the exposed API key `sk_live_real_secret_oops`
2. Force push to remote: `git push origin --force --all`
3. Notify team members to rebase their work

## Prevention

- `.env` is now in `.gitignore`
- Use `.env.example` for documentation
- All secrets should use environment variables
