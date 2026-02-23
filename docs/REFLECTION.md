# Reflection

Answer each question in 2-3 sentences.

## Most surprising discovery

Which vulnerability surprised you the most to find? Why didn't you expect it?

The secret in git history was the most surprising vulnerability. I initially thought deleting the `.env` file would be sufficient, but learning that the sensitive data persists in the commit history was eye-opening. It showed me that git never truly "forgets" anything unless you actively rewrite history with tools like `git filter-branch`.

## Real-world risk

Pick one vulnerability you found. How would you explain its danger to a teammate who's never heard of it?

The XSS (Cross-Site Scripting) vulnerability from using `innerHTML` is dangerous because it allows attackers to inject executable JavaScript into your page. If a user enters something like `<img src=x onerror=alert(document.cookie)>`, it could steal session cookies or redirect users to phishing sites. Always use `textContent` for user-generated content to prevent the browser from executing any HTML or scripts.

## Future practice

What specific habit or check will you add to your own coding workflow to catch these issues before they ship?

I will run `npm audit` before every commit to catch vulnerable dependencies early, and I'll add pre-commit hooks to prevent accidentally committing secrets. I'll also make it a practice to always use `textContent` instead of `innerHTML` for user input, and never use `eval()` for any user-provided data. Finally, I'll ensure all sensitive configuration uses environment variables documented in `.env.example`.
