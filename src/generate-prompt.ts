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
        The commit message should be detailed.
      `.trim();
      break;
    }

    case 'simple': {
      prompt += `
        The commit message should be simple and to the point.
      `.trim();
      break;
    }
  }

  if (flags.typed) {
    prompt += `
      The commit message should be prefixed with a type. The possible types are: feat, fix, docs, style, refactor, test, chore.
    `.trim();
  }

  if (flags.scoped) {
    prompt += `
      The commit message should include a scope, which is a noun describing the part of the codebase affected by the changes (e.g., core, auth, ui).
      The scope should be enclosed in parentheses.
    `.trim();
  }

  if (flags.technical) {
    prompt += `
      The commit message is aimed at developers and can include technical jargon or references to specific files, functions, or algorithms.
    `.trim();
  } else {
    prompt += `
      The commit message should be understandable by non-technical stakeholders.
    `.trim();
  }

  if (flags.tense) {
    prompt += `
      The commit message should be in ${flags.tense} tense.
    `.trim();
  }

  if (flags.emoji) {
    prompt += `
      The commit message should include an appropriate emoji.
      The emoji should be relevant to the changes made in the codebase.
      The emoji is placed at the beginning of the commit message.
    `.trim();
  }

  return prompt;
}