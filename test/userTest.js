const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('Login Test', function () {
	it('valid user', function (done) {
		request('http://localhost/api')
			.post('/users/login')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.send({ email: 'user1@gmail.com', password: 'user1' })
			.end(function (err, res) {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				done();
			});
	});

	it('invalid user', function () {
		request('http://localhost/api')
			.post('/users/login')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.send({ email: 'bbb', password: 'bbb' })
			.end(function (err, res) {
				expect(err).to.not.be.null;
				expect(res).to.have.status(401);
				done();
			});
	});
})