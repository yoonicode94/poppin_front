pipeline {
  agent any
  stages {
    stage('git scm update') {
      steps {
        git url: 'https://github.com/yoonicode94/poppin_front', branch: 'master'
      }
    }
    stage('docker build and push') {
      steps {
        sh '''
        docker build --no-cache -t 192.168.1.10:8443/react-popup .
        docker push 192.168.1.10:8443/react-popup
        '''
      }
    }
    stage('deploy kubernetes') {
      steps {
        sh '''
        kubectl get service react-popup && kubectl delete -f service.yaml
        kubectl get deployment react-popup && kubectl delete -f deployment.yaml
        kubectl apply -f deployment.yaml
        kubectl apply -f service.yaml
        '''
      }
      
    }
  }
}
