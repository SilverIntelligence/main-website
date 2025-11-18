# Contributing to Wall Street Silver Developer Hub

Thank you for your interest in contributing to Wall Street Silver! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful and professional in all interactions.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, Node version)

### Suggesting Features

Feature suggestions are welcome! Please:

- Check if the feature has already been suggested
- Provide a clear use case
- Explain why this feature would be valuable
- Consider implementation complexity

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** from `develop`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Write clear, descriptive commit messages
   - Follow existing code style
   - Add tests for new features
   - Update documentation as needed
4. **Test your changes**
   ```bash
   npm run typecheck
   npm run lint
   npm test
   npm run test:e2e
   ```
5. **Submit a pull request**
   - Provide a clear description of changes
   - Reference any related issues
   - Ensure CI passes

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

Follow conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

Examples:
```
feat(docs): add API authentication guide
fix(contact): resolve rate limiting issue
docs(readme): update installation instructions
```

### Testing

- Write unit tests for utilities and helpers
- Add E2E tests for critical user flows
- Aim for >80% code coverage
- Test edge cases and error conditions

### Documentation

- Update README.md for user-facing changes
- Add JSDoc comments to functions
- Update relevant MDX documentation files
- Include code examples where helpful

## Project Structure

Familiarize yourself with the project structure:

- `app/` - Next.js pages and API routes
- `components/` - React components
- `lib/` - Utility functions and helpers
- `content/` - MDX content files
- `tests/` - Test files
- `.github/workflows/` - CI/CD pipelines

## Local Development

### Setup

```bash
npm install
cp .env.example .env
npm run dev
```

### Running Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Building

```bash
npm run build
npm run start
```

## Content Contributions

### Adding Documentation

1. Create a new MDX file in `content/docs/`
2. Add frontmatter with title, description, date
3. Write clear, concise content
4. Use code examples where helpful
5. Test the rendered page locally

### Adding Research

1. Create a new MDX file in `content/research/`
2. Include all data sources and citations
3. Use proper methodology documentation
4. Include relevant tags
5. Review for accuracy

## Getting Help

- Join our [GitHub Discussions](https://github.com/SilverIntelligence/discussions)
- Read the [documentation](https://developers.wallstreetsilver.com/docs)
- Contact us via the [contact form](https://developers.wallstreetsilver.com/contact)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Wall Street Silver! 🚀
