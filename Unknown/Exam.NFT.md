# ExamNFT is an ERC721 token that represents exams, tests, questions, and tasks in a decentralized educational platform

## It provides functionalities for creating, managing, and verifying tests and exams

In-depth explanation:

    Test and Tasks: Users can create questions with different types (multiple-choice, true/false, matching, short answer, essay, oral, and computational). Each question has an IPFS hash for storing its data, a hashed answer for on-chain verification, and a weight for calculating the test GPA. Tasks are also created with an IPFS hash for storing their data and a verifier address, responsible for verifying the completion of the task.

    Test creation: Users can create tests by providing an IPFS hash for test metadata, an array of question IDs, an array of task IDs. The test taker must transfer a specified amount of VertCoin (VTC) tokens to the contract as a fee, which is payed to the test creator or a delegate. A new unique ID is assigned to the test, and an ERC721 token is minted for the test owner.

    Exam creation: An exam consists of multiple tests and tasks, each with its metadata and properties. An exam has an IPFS hash for its metadata, arrays of test and task IDs, and a passing GPA threshold with a maximum GPA.

    Test and Task management: Exam creators can add test and tasks to their exams. Tasks can be marked as completed by the designer. Task can be marked as completed by the designated verifier. Once a test or task is marked as completed, the test taker can no longer modify it. Once all the tests and tasks in an exam are marked as completed, the exam owner can no longer modify it. BUt can submit it for other users to take the exam for a optional fee

    Exam verification: Exam owners can verify their exams. The verification process calculates a cumulative GPA based on the tests' scores and weights. If the GPA is above the passing threshold, the exam is marked as passed, and an ExamPassed event is emitted. Otherwise, an ExamFailed event is emitted.

    introduce a new state variable sealedExams which is a mapping that keeps track of the sealed exams. You can then create a modifier onlyNotSealed to prevent any further changes to a sealed exam. Lastly, you can create a function sealExam that marks the exam as sealed once all the tests and tasks have been submitted

Comprehensive use case:

An online education platform could use ExamNFT to create and manage exams, tests, and tasks for various courses. Instructors could create tests with questions of different types and weights, as well as tasks that need to be verified by designated verifiers (e.g., instructors, TAs, or even external services). Students would complete these tests and tasks as part of their coursework.

Test creators could also set a passing GPA threshold and a maximum GPA for their tests, allowing them to evaluate students' performance according to their standards. Students who successfully pass their tests receive a reward in VertCoin tokens as an incentive for their efforts.

ExamNFT could also be used in the context of professional certification exams, where candidates need to pass a series of tests to demonstrate their proficiency in a particular field. Once they have completed all the tests in the exam, their cumulative GPA would be calculated, determining whether they have passed the exam or not. If they pass, the ExamPassed event would be emitted, signaling that the candidate has successfully achieved the certification.

In summary, ExamNFT allows the creation of a decentralized educational platform that facilitates the creation, management, and verification of tests and exams, as well as rewarding successful test-takers with VertCoin tokens.
