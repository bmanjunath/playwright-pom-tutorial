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

    stage('Run Tests') {
      steps {
        sh '''
          set -e
          export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
          echo 'executing the playwright test....'
          npx playwright test
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
