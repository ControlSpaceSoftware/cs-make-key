/*global describe, it, beforeEach*/

import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import {makeKey} from '../src'

chai.should();
chai.use(sinonChai);

const expect = chai.expect;

describe('makeKey', () => {
	let id;
	beforeEach(() => {
		id = 'test id';
	});
	it('exits', () => {
		expect(makeKey).to.be.a('function');
	});
	it('generates a key', () => {
		expect(makeKey({id})).to.eql('2720646108b9bcbeaa8b5ab9172d0d67');
	});
	it('generates same key object keys are in different order', () => {
		// the order of the keys is managed by makeKey
		const key1 = makeKey({id, test: 'test 1'});
		const key2 = makeKey({test: 'test 1', id});
		expect(key1).to.eql(key2);
	});
});
