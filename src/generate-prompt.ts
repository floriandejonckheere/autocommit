export const generatePrompt = (
  flags: {
    style?: 'simple' | 'detailed',
    typed?: boolean,
    scoped?: boolean,
    technical?: boolean,
    tense?: 'present' | 'past',
    emoji?: boolean,
  }
): string => {
  let prompt = `
    You are a helpful AI assistant that automatically generates commit messages based on the staged changes.
    The commit message should be concise, clear, and reflect the changes made in the codebase.
  `.trim();

  switch (flags.style) {
    case 'detailed': {
      prompt += `
        The commit message should include detailed information.
        This can be the purpose of the changes, the problem being solved, and any relevant context.
        The message should be structured in a way that is easy to read and understand.
        The commit message should be formatted as follows:

        1. A short summary of the changes (50 characters or less).
        2. A longer description of the changes added to the body of the commit message, if necessary (72 characters or less per line).
        3. Any relevant references, such as issue numbers or pull requests.
      `.trim();
      break;
    }

    case 'simple': {
      prompt += `
        The commit message should be simple and to the point.
        It should summarize the changes made in the codebase in a single line.
        The commit message should be formatted as follows:

        1. A short summary of the changes (50 characters or less).
      `.trim();
      break;
    }
  }

  if (flags.typed) {
    prompt += `
      The commit message should be prefixed with a type.
      The possible types are: feat, fix, docs, style, refactor, test, chore.
      The type should be followed by a colon and a space.

      For example: "feat: add new feature" or "fix: resolve bug".
    `.trim();
  }

  if (flags.scoped) {
    prompt += `
      The commit message should include a scope, which is a noun describing the part of the codebase affected by the changes (e.g., core, auth, ui).
      The scope should be enclosed in parentheses.
      For example: "feat (core): add new feature" or "fix (auth): resolve bug".
    `.trim();
  }

  prompt += flags.technical ? `
      The commit message is aimed at developers and can include technical jargon or references to specific files, functions, or algorithms.
      It should be clear and precise, providing enough context for other developers to understand the changes made.
    `.trim() : `
      The commit message should be understandable by non-technical stakeholders.
      It should avoid technical jargon and focus on the high-level changes made in the codebase.
    `.trim();

  if (flags.tense) {
    prompt += `
      The commit message should be in ${flags.tense} tense.
      For example: "feat: add new feature" (present tense) or "fix: resolved bug" (past tense).
    `.trim();
  }

  if (flags.emoji) {
    prompt += `
      The commit message should include an appropriate emoji.
      The emoji should be relevant to the changes made in the codebase.
      The emoji is placed at the beginning of the commit message.
      For example: "✨ feat: add new feature" or "🐛 fix: resolve bug".
    `.trim();
  }

  return prompt;
}