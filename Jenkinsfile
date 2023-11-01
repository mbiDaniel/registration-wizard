pipeline {
    agent any

    stages {
        stage('Clone Project') {
            steps {
                echo 'Cloning Project..'
                git branch: 'main', url: 'https://github.com/mbiDaniel/registration-wizard.git'
                sh 'ls -lrt'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}