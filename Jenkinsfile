pipeline {
  agent any

  options {
    timestamps()
  }

  environment {
    CI = "true"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Setup Node + Install') {
      steps {
        sh '''
          set -e

          # Jenkins (brew service) sometimes misses PATH; keep both common paths:
          export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

          node -v
          npm -v

          # Install deps exactly from package-lock.json (best for CI)
          npm ci

          # Install browsers needed by Playwright
          npx playwright install
        '''
      }
    }

    stage('Create .env (if missing)') {
      steps {
        sh '''
          set -e
          if [ ! -f "env/.env" ] && [ -f "env/.env.example" ]; then
            cp env/.env.example env/.env
            echo "Created env/.env from env/.env.example"
          else
            echo "env/.env already exists or env/.env.example not found"
          fi
        '''
      }
    }

    stage('Run Tests') {
      steps {
        sh '''
          set -e
          export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

          npx playwright test form.spec.ts
        '''
      }
    }
  }

  post {
    always {
      // Playwright HTML report (default folder is playwright-report)
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

      // If your runs generate test-results, keep them too
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
    }
  }
}
