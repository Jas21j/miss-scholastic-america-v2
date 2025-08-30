import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock data for demonstration when there are no submissions
const mockApplications = [
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '(555) 123-4567',
    birthdate: '2008-05-15',
    division: 'junior-teen',
    school: 'Lincoln High School',
    gpa: '3.8',
    createdAt: new Date(),
    headshotUrl: 'https://i.ibb.co/Y466rx0q/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-0.png',
    fullBodyUrl: 'https://i.ibb.co/Y466rx0q/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-0.png',
    bioUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: '2',
    firstName: 'Emily',
    lastName: 'Johnson',
    email: 'emily.johnson@example.com',
    phone: '(555) 987-6543',
    birthdate: '2006-12-10',
    division: 'teen',
    school: 'Washington Academy',
    gpa: '4.0',
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    headshotUrl: 'https://i.ibb.co/FL4D8vhP/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-1.png',
    fullBodyUrl: 'https://i.ibb.co/FL4D8vhP/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-1.png',
    bioUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: '3',
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.williams@example.com',
    phone: '(555) 222-3333',
    birthdate: '2001-03-22',
    division: 'miss',
    school: 'State University',
    gpa: '3.9',
    createdAt: new Date(Date.now() - 172800000), // 2 days ago
    headshotUrl: 'https://i.ibb.co/27yH0Tpt/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-3.png',
    fullBodyUrl: 'https://i.ibb.co/27yH0Tpt/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-3.png',
    bioUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];

const mockContacts = [
  {
    id: '1',
    name: 'Mary Johnson',
    email: 'mary@example.com',
    subject: 'Question about eligibility',
    message: 'Hello, I have a question about age eligibility for the Junior Teen division. My daughter will be turning 16 two weeks after the July 1st cutoff date. Would she still be eligible for the Junior Teen division?',
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'Robert Davis',
    email: 'rdavis@example.com',
    subject: 'Sponsorship opportunities',
    message: 'I represent XYZ Company and we are interested in sponsorship opportunities for the upcoming pageant. Could someone from your team contact me with more information?',
    createdAt: new Date(Date.now() - 86400000) // 1 day ago
  },
  {
    id: '3',
    name: 'Jennifer Wilson',
    email: 'jwilson@example.com',
    subject: 'Accommodation information',
    message: 'I\'m a parent of a contestant and I would like to know if there are any recommended hotels near the venue that offer discounted rates for pageant participants and their families.',
    createdAt: new Date(Date.now() - 172800000) // 2 days ago
  }
];

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    // Load real submissions data from localStorage with a slight delay to simulate API call
    const timer = setTimeout(() => {
      // Get application submissions from localStorage or use mock data if none exist
      const storedApplications = localStorage.getItem('applicationSubmissions');
      const parsedApplications = storedApplications ? JSON.parse(storedApplications) : mockApplications;
      
      // Get contact submissions from localStorage or use mock data if none exist
      const storedContacts = localStorage.getItem('contactSubmissions');
      const parsedContacts = storedContacts ? JSON.parse(storedContacts) : mockContacts;
      
      // Set the application and contact data in state
      setApplications(parsedApplications);
      setContacts(parsedContacts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [navigate]);

  const formatDate = (date) => {
    if (!date) return 'N/A';
    try {
      return new Date(date).toLocaleDateString() + ' ' + 
             new Date(date).toLocaleTimeString();
    } catch (error) {
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <section className="relative py-10 sparkle-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Admin Dashboard</h1>
            <p className="text-lg text-gray-600">
              View and manage form submissions and contact requests
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="applications" className="space-y-8">
              <TabsList className="mx-auto flex justify-center">
                <TabsTrigger value="applications">Applications ({applications.length})</TabsTrigger>
                <TabsTrigger value="contacts">Contact Requests ({contacts.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="applications" className="space-y-6">
                {applications.length === 0 ? (
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <p className="text-gray-600">No applications submitted yet.</p>
                  </div>
                ) : (
                  applications.map((application) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={application.id}
                      className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">
                            {application.firstName} {application.lastName}
                          </h3>
                          <p className="text-sm text-gray-500">{application.email}</p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatDate(application.createdAt)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm font-medium">Division</p>
                          <p className="text-sm text-gray-600">{application.division}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">School/University</p>
                          <p className="text-sm text-gray-600">{application.school}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">GPA</p>
                          <p className="text-sm text-gray-600">{application.gpa}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p className="text-sm text-gray-600">{application.phone}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {application.headshotUrl && (
                          <a
                            href={application.headshotUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm inline-flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            View Headshot
                          </a>
                        )}
                        {application.fullBodyUrl && (
                          <a
                            href={application.fullBodyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm inline-flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            View Full Body Photo
                          </a>
                        )}
                        {application.bioUrl && (
                          <a
                            href={application.bioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm inline-flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View Bio
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </TabsContent>

              <TabsContent value="contacts" className="space-y-6">
                {contacts.length === 0 ? (
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <p className="text-gray-600">No contact requests submitted yet.</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={contact.id}
                      className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">{contact.name}</h3>
                          <p className="text-sm text-gray-500">{contact.email}</p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatDate(contact.createdAt)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Subject</p>
                        <p className="text-sm text-gray-600">{contact.subject}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Message</p>
                        <p className="text-sm text-gray-600 whitespace-pre-line">{contact.message}</p>
                      </div>
                    </motion.div>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard; 