import test from 'node:test';
import assert from 'node:assert/strict';
import { estimate } from '../core.mjs';
test('serial echo budget vs one batch', () => { const r=estimate('HELLO',500); assert.equal(r.remoteMs,2500); assert.equal(r.localMs,500); assert.equal(r.savedTrips,4); });
test('empty input sends no requests', () => assert.equal(estimate('',500).localTrips,0));
test('zero latency and a single character', () => { assert.equal(estimate('A',0).remoteMs,0); assert.equal(estimate('A',500).savedTrips,0); });
test('Unicode code points counted once', () => assert.equal(estimate('🌍',10).characters,1));
test('invalid latency rejected', () => { for(const n of [-1,NaN,Infinity,2001]) assert.throws(()=>estimate('hi',n)); });
