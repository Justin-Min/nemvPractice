module.exports = {
  apps : [{
    name: 'nemvPractice',
    script: './be/bin/www',  
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_pr: {
      NODE_ENV: 'production',
      PORT: 80
    }
  }],

  deploy : {
    pr : {
      user : 'root',
      host : '133.186.146.89',
      key  : '~/keys/nemvKey.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:Justin-Min/nemvPractice.git',
      path : '/var/www/nemvPractice',
      'post-deploy' : 'yarn pm2'
    }
  }
};
