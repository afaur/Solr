// Load dependency
var solr = require('solr-client');

// Create a client
var client = solr.createClient({
  host: process.env['solr_host'],
  port: process.env['solr_port'],
  path: process.env['solr_path'],
  core: process.env['solr_core']
});

// Set query
var query = 'q=*%3A*&wt=json&indent=true';

// Run query
client.get('providers/select', query, function(err, obj){
  if ( err ) {
    console.log( err );
  } else {
    console.log( 'Solr response:', obj );
  }
});

