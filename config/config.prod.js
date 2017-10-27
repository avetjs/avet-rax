'use strict';

exports.build = {
  webpack: {
    resolve: {
      alias: {
        'react': 'rax',
        'react-dom': 'rax-dom'
      }
    }
  }
}
