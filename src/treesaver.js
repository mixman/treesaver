/**
 * @fileoverview Bootstrap for the Treesaver library.
 */

/**
 * @preserve Copyright 2010 Filipe Fortes ( www.fortes.com ).
 * Version: 0.1.
 *
 * Open source license to be determined.
 */

goog.provide('treesaver');

goog.require('treesaver.constants');
goog.require('treesaver.debug');
goog.require('treesaver.history');
goog.require('treesaver.html5');
goog.require('treesaver.capabilities');
goog.require('treesaver.boot');

// Begin loading
treesaver.boot.load();