# Blazedemo K6 performance testing
### Install Instructions
```
Linux
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install k6
```
```
Mac
brew install k6
```
```
Windows
https://dl.bintray.com/loadimpact/windows/k6-v0.25.0-amd64.msi
```
```
InfluxDB
brew install influxdb OR
sudo apt-get install influxdb
```
```
Grafana
brew install grafana
sudo apt-get install grafana
```

### Prerequisites

1. Installed and running InfluxDB with created database named k6 (sample name for test purposes)
2. Installed and running Grafana (Data source InfluxDB with previously created database, [sample k6 dashboard](https://grafana.com/grafana/dashboards/2587))
3. Installed k6 v0.25.0 or higher

### Run sample test 
```
yarn install
```

```
yarn test
```

### Reports
Reporting is displayed on Grafana, if run locally [visit localhost:3000](http://localhost:3000)
~/k6 run index.js --config support/config-local.json

### k6 + InfluxDB + Grafana for QA Env
Currently it is localhost. Can be setup on any other external InfluxDB or Granfana link with use of config file
```
k6 v0.25.0
InfluxDB > localhost:8086
Grafana

If InfluxDB is setup on any other machine, use confoig.json to configure connection to the DB
eg:
{
  "out": ["influxdb"],
  "collectors": {
    "influxdb": {
      "addr": "https://104.196.16.20:8086",
      "db": "k6",
      "username": "admin",
      "password": "xLB93vbRA6ov7TNV",
      "insecure": true
    }
  }
}

To run test  : 
~/k6 run index.js --config support/config.json
```

### Reference
https://docs.k6.io/docs
