var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(last, first) {
        this.lastName = last;
        this.firstName = first;
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (first) {
        this.firstName = first;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (last) {
        this.lastName = last;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(last, first, age, html, js, css) {
        var _this = _super.call(this, last, first) || this;
        _this.scoreCSS = css;
        _this.ScoreHTML = html;
        _this.scoreJS = js;
        _this.age = age;
        return _this;
    }
    Student.prototype.avgScore = function () {
        return (this.scoreCSS + this.scoreJS + this.ScoreHTML) / 3;
    };
    return Student;
}(Person));
var s = new Student("Nanaliu", "Chuang", 25, 8, 5, 7);
var text = "";
text += "I'm " + s.lastName + " " + s.firstName + "," + "i am " + s.age + " years old. " + "My average is " + s.avgScore() + " .";
document.body.textContent = text;
