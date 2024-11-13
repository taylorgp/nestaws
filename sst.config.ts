import './.sst/platform/config';

export default $config({
  app(input) {
    return {
      name: 'nestaws',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc('NestVpc', { bastion: false });
    const cluster = new sst.aws.Cluster('NestCluster', { vpc });

    cluster.addService('NestService', {
      loadBalancer: {
        ports: [{ listen: '80/http' }],
      },
      dev: {
        command: 'node --watch index.js',
      },
    });
  },
});
