(function() {
  var Base, Metafields, CustomerSavedSearch,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Base = require('./base');

  Metafields = require('./metafield');

  CustomerSavedSearch = (function(_super) {

    __extends(CustomerSavedSearch, _super);

    CustomerSavedSearch.prototype.slug = "customer_saved_search";

    CustomerSavedSearch.prototype.prefix = "/customer_saved_searches";

    function CustomerSavedSearch(site) {
      this.metafields = new Metafields(this.prefix, site);
      CustomerSavedSearch.__super__.constructor.call(this, site);
    }

    CustomerSavedSearch.prototype.get = function(opts, callback) {
      if (typeof opts === "function") {
        callback = opts;
        opts = {};
      }
      var url = this.resource.queryString("" + this.prefix, opts);
      return this.resource.get(url, "customer_saved_searches", callback);
    };

    CustomerSavedSearch.prototype.count = function(opts, callback) {
      if (typeof opts === "function") {
        callback = opts;
        opts = {};
      }
      var url = this.resource.queryString("" + this.prefix + "/count", opts);
      return this.resource.get(url, "count", callback);
    };

    CustomerSavedSearch.prototype.getOne = function(id, opts, callback) {
      if (!id || typeof id !== "string") { return cb(new Error("Please provide an id that is a string. Yours was a(n): ", typeof id));}
      if (typeof opts === "function") {
        callback = opts;
        opts = {};
      }
      var url = this.resource.queryString("" + this.prefix + "/" + id, opts);
      return this.resource.get(url, "customer_saved_search", callback);
    };

    CustomerSavedSearch.prototype.customers = function(id, opts, callback) {
      if (!id || typeof id !== "string") { return cb(new Error("Please provide an id that is a string. Yours was a(n): ", typeof id));}
      if (typeof opts === "function") {
        callback = opts;
        opts = {};
      }
      var url = this.resource.queryString("" + this.prefix + "/" + id + "/customers", opts);
      return this.resource.get(url, "customers", callback);
    };

    return CustomerSavedSearch;

  })(Base);

  module.exports = CustomerSavedSearch;

}).call(this);
